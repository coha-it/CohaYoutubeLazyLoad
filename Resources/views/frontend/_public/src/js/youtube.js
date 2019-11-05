function ytLazyLoad(yt) {
  var eElem     = $(yt);
  var eWrapper = eElem.closest('.yt--lazyload-plugin');
  var sUrl      = yt.getAttribute('data-url');
      sUrl      += '&autoplay=1';

  eWrapper.after(
    '<iframe class="external--content content--youtube" width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/' + sUrl + '" frameborder="0" allowfullscreen></iframe>'
  );

  eWrapper.remove();

}