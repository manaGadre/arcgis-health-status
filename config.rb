# Middleman Config

require "calcite-web"

activate :i18n, :mount_at_root => false

set :css_dir, 'assets/css'
set :js_dir, 'assets/js'
set :images_dir, 'assets/images'
set :fonts_dir, 'assets/fonts'

# Helpers function block
helpers do

  def current_language
      #I18n.locale.to_s
  	get_locale_from_url(request.path)
  end

  def get_locale_from_url url
  	url = url[0..url.index('/')-1]
  end

  # localization helpers
  def t key
    I18n.locale = current_language
    translation = I18n.t(key)
    if translation.include?("translation missing")
      old_locale = I18n.locale
      I18n.locale = :en
      translation = I18n.t(key)
      I18n.locale = old_locale
    end
    translation
  end

end

activate :directory_indexes
activate :livereload, :host => "127.0.0.1"


configure :build do
  # Minify CSS on build
  activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Add a query string cachebuster that will be appended to all assets
  activate :cache_buster

  # Automatically compress PNG images
  # activate :smusher

  ignore 'cdn/*'

end
