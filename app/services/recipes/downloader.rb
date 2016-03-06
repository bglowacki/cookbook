module Services
  module Recipes
    class UnknownWebsite < StandardError; end

    class Downloader
      def initialize
        @agent = ::Mechanize.new
      end

      def call(recipe_url)
        recipe_uri = URI.parse(recipe_url)
        hostname = recipe_uri.hostname.gsub(/^www\./, '')
        downloader =
          case hostname
            when 'kwestiasmaku.com'
              KwestiaSmakuDownloader.new(@agent)
            else
              raise UnknownWebsite.new("Don't know how to download recipe for #{hostname}")
          end

        downloader.call(recipe_url)

      end
    end
  end
end