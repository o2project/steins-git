# A sample Guardfile
# More info at https://github.com/guard/guard#readme

# Add files and commands to this file, like the example:
#   watch(%r{file/path}) { `command(s)` }
#
guard :shell do
  watch(/index.adoc/) {|m| `rake generate:html` }
  watch(/^Ch(.*)\/(.*).adoc/) {|m| `rake generate:html` }
end
