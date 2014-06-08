SRC_FILE = 'index.adoc'
OUTPUT_DIRECTORY = 'build/'
OUTPUT_FILE = 'index.html'

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
  sh "bundle exec asciidoctor -a icons=font -o #{output} #{src}"
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
    puts '画像のディレクトリをbuildディレクトリ配下にコピーします…'
    directory_copy 'Ch1_WhatsGit/img', "#{OUTPUT_DIRECTORY}/Ch1_WhatsGit/img"
    puts "完了！"
    puts 'HTMLを生成します…'
    build_asciidoc SRC_FILE, "#{OUTPUT_DIRECTORY}#{OUTPUT_FILE}"
    puts "完了！ => #{OUTPUT_FILE}"
  end
end

task :publish do
  push_to_target_branch REPOSITORY, PUBLISH_BRANCH
end

task :clean do
  require 'fileutils'
  FileUtils.rm_rf OUTPUT_DIRECTORY
end
