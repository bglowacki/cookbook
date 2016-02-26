namespace :ingredients do
  task get: :environment do
    page_urls = [
      "http://diety.wieszjak.polki.pl/tabela-kalorii-i-wartosci-odzywczych-produkty-a-h,tabele-artykul,10299029.html",
      "http://diety.wieszjak.polki.pl/tabela-kalorii-i-wartosci-odzywczych-produkty-i-o,tabele-artykul,10299033.html",
      "http://diety.wieszjak.polki.pl/tabela-kalorii-i-wartosci-odzywczych-produkty-p-z,tabele-artykul,10299037.html"
    ]

    ingredients = []
    agent = Mechanize.new
    page_urls.map do |page_url|
      page = agent.get(page_url)
      table = page.search(".MsoTableGrid")
      rows = table.search("tr")[1..-1]
      rows.map do |row|
        cells = row.search("td")
        name = cells[0].text.strip
        kcal = cells[1].text.strip.gsub(/[              ]/, "").to_i
        carbs = cells[2].text.strip.gsub(/[              ]/, "").to_f
        protein = cells[3].text.strip.gsub(/[              ]/, "").to_f
        fat = cells[4].text.strip.gsub(/[              ]/, "").to_f

        Ingredient.create!(
          name:  name,
          kcal: kcal,
          carbs: carbs,
          protein: protein,
          fat: fat
        )
      end
    end
    puts ingredients.inspect
  end
end