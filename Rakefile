SRC_FILE = 'index.adoc'
OUTPUT_FILE = 'index.html'

REPOSITORY = if ENV['GH_TOKEN']
               'https://$GH_TOKEN@github.com/o2project/steins-git'
             else
               'git@github.com:o2project/steins-git'
             end
PUBLISH_BRANCH = 'gh-pages'

def update_repo(branch)
  sh 'git fetch origin'
  sh "git reset --hard origin/#{branch}"
end

def build_asciidoc(src, output)
  sh "bundle exec asciidoctor -a icons=font -o #{output} #{src}"
end

def push_to_target_branch(repo, branch)
  sha1, _ = `git log -n 1 --oneline`.strip.split(' ')

  sh 'git add -A'
  sh "git commit -m '[ci skip] Update with #{sha1}'"
  sh "git push --quiet #{repo} #{branch}"
end

task :setup do
  update_repo PUBLISH_BRANCH
end

namespace :generate do
  task :html do
    puts 'Generate HTML...'
    puts 'Building asciidoc'
    build_asciidoc SRC_FILE, OUTPUT_FILE
    puts "Done! => #{OUTPUT_FILE}"
  end
end

task :publish do
  push_to_target_branch REPOSITORY, PUBLISH_BRANCH
end
