SRC_FILE = 'index.adoc'
OUTPUT_DIRECTORY = 'build/'
OUTPUT_HTML_FILE = 'index.html'
OUTPUT_XML_FILE = 'steins-git.xml'

REPOSITORY = if ENV['GH_TOKEN']
               'https://$GH_TOKEN@github.com/o2project/steins-git'
             else
               'git@github.com:o2project/steins-git'
             end
PUBLISH_BRANCH = 'gh-pages'

TEMP_DIR = 'build'

def init_repo(repo, branch)
  require 'fileutils'

  if Dir["#{TEMP_DIR}/.git"].empty?
    FileUtils.rm_rf TEMP_DIR
    sh "git clone --quiet #{repo} #{TEMP_DIR} 2> /dev/null"
  end

  Dir.chdir TEMP_DIR do
    sh "git checkout --orphan #{branch}"
  end
end

def update_repo(branch)
  Dir.chdir TEMP_DIR do
    sh 'git fetch origin'
    sh "git reset --hard origin/#{branch}"
  end
end

def directory_copy(src, dist)
  require 'fileutils'

  unless File.exist?(dist)
    FileUtils.mkdir_p(dist)
  end

  FileUtils.copy_entry src, dist
end

def build_asciidoc(src, output)
  sh "cp -r public build/"
  sh "bundle exec asciidoctor -a lang=ja -a bookversion=`node ./bin/bookversion` \
  -a icons=font -b docbook -o #{output} #{src}"
end

def build_asciidoc_to_html(src, output)
  sh "cp -r public build/"
  sh "bundle exec asciidoctor -a bookversion=`node ./bin/bookversion` \
  -a icons=font -o #{output} #{src}"
end

def build_asciidoc_to_pdf(src, output)
  sh "cp -r public build/"
  sh "bundle exec asciidoctor -a lang=ja -a bookversion=`node ./bin/bookversion` \
  -a icons=font -b docbook \
  -o #{output} #{src}"
  sh "./bin/build-pdf #{output}"
end

def build_asciidoc_to_epub(src)
  sh "bundle exec asciidoctor-epub3 -D build -a ebook-validate #{src}"
end

def build_asciidoc_to_mobi(src)
  sh "bundle exec asciidoctor-epub3 -D build -a ebook-format=kf8 #{src}"
end

def push_to_target_branch(repo, branch)
  sha1, _ = `git log -n 1 --oneline`.strip.split(' ')

  Dir.chdir TEMP_DIR do
    sh 'git add -A'
    sh "git commit -m '[ci skip] Update with #{sha1}'"
    sh "git push --quiet #{repo} #{branch}"
  end
end

task :setup do
  init_repo REPOSITORY, PUBLISH_BRANCH
  update_repo PUBLISH_BRANCH
end

namespace :generate do
  task :html do
    puts 'Copy images to build directory...'
    directory_copy './images', "#{OUTPUT_DIRECTORY}images"
    puts "Done!"
    puts 'Generate HTML...'
    build_asciidoc_to_html SRC_FILE, "#{OUTPUT_DIRECTORY}#{OUTPUT_HTML_FILE}"
    puts "Done! => #{OUTPUT_HTML_FILE}"
  end

  task :docbook do
    puts 'Copy images to build directory...'
    directory_copy './images', "#{OUTPUT_DIRECTORY}images"
    puts "Done!"
    puts 'Generate DocBook...'
    build_asciidoc SRC_FILE, "#{OUTPUT_DIRECTORY}#{OUTPUT_XML_FILE}"
    puts "Done! => #{OUTPUT_XML_FILE}"
  end

  task :pdf do
    puts 'Copy images to build directory...'
    directory_copy './images', "#{OUTPUT_DIRECTORY}images"
    puts "Done!"
    puts 'Generate PDF...'
    build_asciidoc_to_pdf SRC_FILE, "#{OUTPUT_DIRECTORY}#{OUTPUT_XML_FILE}"
    puts "Done!"
  end

  task :epub do
    puts 'Copy images to build directory...'
    directory_copy './images', "#{OUTPUT_DIRECTORY}images"
    puts "Done!"
    puts 'Generate EPUB...'
    build_asciidoc_to_epub SRC_FILE
    puts "Done!"
  end

  task :mobi do
    puts 'Copy images to build directory...'
    directory_copy './images', "#{OUTPUT_DIRECTORY}images"
    puts "Done!"
    puts 'Generate Mobi...'
    build_asciidoc_to_mobi SRC_FILE
    puts "Done!"
  end
end

task :publish do
  push_to_target_branch REPOSITORY, PUBLISH_BRANCH
end

task :clean do
  require 'fileutils'
  FileUtils.rm_rf OUTPUT_DIRECTORY
end
