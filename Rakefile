SRC_FILE = 'index.adoc'
OUTPUT_FILE = 'index.html'

REPOSITORY = if ENV['GH_TOKEN']
               'https://$GH_TOKEN@github.com/o2project/steins-git'
             else
               'git@github.com:o2project/steins-git'
             end
PUBLISH_BRANCH = 'gh-pages'

TEMP_DIR = 'build'

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
