module Support
  module DatabasePlugin
    DatabaseCleaner.strategy = :transaction
    DatabaseCleaner.clean_with(:truncation)

    def before_setup
      super
      DatabaseCleaner.start
    end

    def after_teardown
      DatabaseCleaner.clean
      super
    end
  end
end
