module PostsHelper
    def factorial
        n = (1..10).to_a.sample
        (1..n).inject(:*)
    end
end
