SRC_FILE = 'index.adoc'
OUTPUT_FILE = 'index.html'

def build_asciidoc(src, output)
  sh "bundle exec asciidoctor -a icons=font -o #{output} #{src}"
end

namespace :generate do
  desc 'index.adocをindex.htmlへ変換します'
  task :html do
    puts 'Generate HTML...'
    puts 'Building asciidoc'
    build_asciidoc SRC_FILE, OUTPUT_FILE
    puts "Done! => #{OUTPUT_FILE}"
  end
end
