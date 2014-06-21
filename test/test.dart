library main_test;

// import 'package:scheduled_test/scheduled_test.dart';
// import 'package:unittest/html_config.dart';
import 'package:unittest/unittest.dart';
import 'dart:html';
import 'dart:async';

main(){
  // useHtmlConfiguration();

  group("[styles]", (){
    // setUp((){
    //   return new Future.delayed(new Duration(milliseconds: 10));
    // });

    test('the app returns OK', (){
      var xFoo = query('x-foo');
      expect(xFoo.shadowRoot.text, contains('orange'));
    });
  });

  pollForDone(testCases);
}

pollForDone(List tests) {
  if (tests.every((t)=> t.isComplete)) {
    window.postMessage('dart-main-done', window.location.href);
    return;
  }

  var wait = new Duration(milliseconds: 100);
  new Timer(wait, ()=> pollForDone(tests));
}
