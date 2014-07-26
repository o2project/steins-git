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

def build_asciidoc_to_html(src, output)
  sh "bundle exec asciidoctor -a bookversion=`node ./bin/bookversion` \
  -a icons=font -o #{output} #{src}"
end

def build_asciidoc_to_pdf(src, output)
  sh "bundle exec asciidoctor -a lang=en -a bookversion=`node ./bin/bookversion` \
  -a icons=font -b docbook \
  -o #{output} #{src}"
  sh "./bin/build-pdf #{output}"
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
    puts 'Each section img directory recursively copy to under build directory...'
    directory_copy 'Ch1_WhatsGit/img', "#{OUTPUT_DIRECTORY}/Ch1_WhatsGit/img"
    directory_copy 'Ch3_HowToGit/img', "#{OUTPUT_DIRECTORY}/Ch3_HowToGit/img"
    puts "Done!"
    puts 'Generate HTML...'
    build_asciidoc_to_html SRC_FILE, "#{OUTPUT_DIRECTORY}#{OUTPUT_HTML_FILE}"
    puts "Done! => #{OUTPUT_HTML_FILE}"
  end

  task :pdf do
    puts 'Each section img directory recursively copy to under build directory...'
    directory_copy 'Ch1_WhatsGit/img', "#{OUTPUT_DIRECTORY}/Ch1_WhatsGit/img"
    directory_copy 'Ch2_WhyGit/img', "#{OUTPUT_DIRECTORY}/Ch2_WhyGit/img"
    directory_copy 'Ch3_HowToGit/img', "#{OUTPUT_DIRECTORY}/Ch3_HowToGit/img"
    puts "Done!"
    puts 'Generate PDF...'
    build_asciidoc_to_pdf SRC_FILE, "#{OUTPUT_DIRECTORY}#{OUTPUT_XML_FILE}"
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
