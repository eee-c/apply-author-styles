describe('<apply-author-styles>', function(){
  var container, el;

  beforeEach(function(){
    container = document.createElement("div");
    el = document.createElement("x-foo");
    container.appendChild(el);
    document.body.appendChild(container);

  });

  afterEach(function(){
    // document.body.removeChild(container);
  });

  describe('styles of elements using is', function(){
    beforeEach(function(){
      // el = document.querySelector('x-foo');
      // el.async();
    });

    // it('should see the element', function() {
    //   expect(el).toNotBe(undefined);
    // });

    it('should apply page CSS from <style> tags', function(){
      console.log(el.shadowRoot)
         debugger
    });
  });
});
