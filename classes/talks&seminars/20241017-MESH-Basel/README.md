# Reading Between the Lines

[maybe here remove this part and be more descriptive of reading text]

For this presentation I wanted to talk about my practice, specially that part of practice that took part at the very beginning of my PhD. The latter was about the understanding of how data is created within social media platforms, specifically YouTube.

If data is captured from users when using a platform, this would mean that laptop, smartphone and tablet must be sites [of struggle] for its production. To find such sites some guidance was needed. The latter took the form of technical papers describing how YouTube recommender system works.

the main focus, was to be able to understand how data is created on an algorithmic level. To do this I needed to subvert the use of debugging tools. The latter are used for error correction by web developers, and can be used on any website. they offer a wide range of tools for network analysis and code reading; it can stop code execution and show the content of variables. But most importantly it shows the whole code running on the device at use.

With the insight from the technical papers it was possible to navigate within the code. And by using some combined techniques of network analysis, stack tracing and logging after few months it was possible to find a site of [struggle] data production.

## Annotating Hovering

And here is the whole annotated code for the capturing of hover information. So to say when a user keeps their mouse over video thumbnail to preview it.

```javascript
/**
 * here below the capturing of the hover data in
 * https://www.youtube.com/s/desktop/1857023c/jsbin/desktop_polymer_inlined_html_polymer_flags.vflset/desktop_polymer_inlined_html_polymer_flags.js
 */

/************************************************************************************************
* as you can see here below it becomes the prototype of the function , or rather class RQ
* here they are using this old way to compile classes using the the prototypes within a function
* I guess this is made for retro-compatibility with older flavors of JavaScript
************************************************************************************************/
e = RQ.prototype;
e.attached = function () {
  this.data && (this.isAttachedAndDataSet = !0, this.showThumbnail())
};
e.detached = function () {
  this.isAttachedAndDataSet = !1;
  this.hideThumbnail();
  this.data = void 0;
  this.csn = null
};
e.dataChanged = function () {
  this.data && this.isAttached && !this.isAttachedAndDataSet && (this.isAttachedAndDataSet = !0, this.showThumbnail())
};
e.showThumbnail = function () {
  var a = this;
  this.csn = so();
  Kp('fmth');
  Rj.cancelJob(this.mouseOverDelayJobId);
  this.data && this.data.movingThumbnailDetails && this.data.movingThumbnailDetails.thumbnails ? this.mouseOverDelayJobId = Sj(function () {
    a.loadingStartTimeMs = Hj();
    var b = a.$.thumbnail;
    b.complete ? a.displayMouseOverImage() : a.listen(b, 'load', 'displayMouseOverImage')
  }, 150) : this.toggleClass('show', !0, this.$.play)
};
e.hideThumbnail = function () {
  ///////////////////////////////////////////////////
  ///////////////////////////////////////////////////
  this.data && this.data.enableHoveredLogging && this.logEvent('INTERACTION_LOGGING_GESTURE_TYPE_HOVER'); // <== here the data production starts
  this.removeVideoPreview()
  ///////////////////////////////////////////////////
  ///////////////////////////////////////////////////
};
e.onTap = function () {
  this.removeVideoPreview()
};
/**
 * line 107813
 * this is the logging function
 * @param {*} a 
 */
e.logEvent = function (a) {
  if (!(0 >= this.loadingStartTimeMs)) {
    var b = {
      isMovingThumbnail: this.hasVideoPreview // true or false depending whether the preview exists
    };
    if (this.hasVideoPreview && 0 < this.startTimeMs) {
      var c = this.loadingEndTimeMs - this.loadingStartTimeMs;
      0 < c && (b.movingThumbnailLoadingDurationMs = Math.round(c));
      /**************************
       * Here check what Hj() is se line [81]
       * it calculates the current time 
       **************************/
      b.durationHoveredMs = Math.round(Hj() - this.startTimeMs) // here the amount of time of hovering is computed
      ///////////////////////////////////////////////////
      ///////////////////////////////////////////////////
    }
    this.videoId && (b.videoId = this.videoId);
    this.csn && this.trackingParams && GRa(this.csn, mo(this.trackingParams), a, {
      thumbnailHoveredData: b
    });
    this.startTimeMs = this.loadingEndTimeMs = this.loadingStartTimeMs = - 1;
    this.hasVideoPreview = !1
  }
};
/**
 * this function below gets the the current time but checks whether 
 * window.ytcsi is enabled
 * or window .performance 
 * or window.timing.performnce
 */
var Hj =
  // if statement 1
  window.ytcsi && window.ytcsi.now ?
    // if true return window.ytcsi.now
    window.ytcsi.now :
    // else check whether any of the four exists
    window.performance && window.performance.timing && window.performance.now && window.performance.timing.navigationStart ?
      // if true return window. performance
      function () {
        return window.performance.timing.navigationStart + window.performance.now()
      } :
      // else return Date()
      function () {
        return new Date().getTime()
      };


function JRa(a) {
    var b,
    c = [
    ],
    d = !1,
    f = new hi(function (h, l) {
      Uh(a, 'mouseenter', zj(function () {
        var m,
        p,
        r;
        return Ca(function (u) {
          if (1 == u.nextAddress) return b = Ak(),
          m = KRa(a),
          c.push(m),
          p = LRa(a, function () {
            d = !0;
            l(Error('abandon hover'))
          }),
          q(u, m, 2);
          if (3 != u.nextAddress) return p && Zh(p),
          r = MRa(a),
          c.push(r),
          q(u, r, 3);
          h();
          na(u)
        })
      }))
    });
    f.then(function () {
      var h = Ak() - b,
      // hard coded values within youtube hovering capture
      // recognizing labour: here below are the hardcoded value for when hovering is productive and when it is not aka taylorism
      l = qj('minimum_duration_to_consider_mouseover_as_hover', 500), // half second
      m = qj('max_duration_to_consider_mouseover_as_hover', 600000); // 10 minutes
      h = Math.round(h);
      l > h || m <= h || (l = a.getScreenLayer ? a.getScreenLayer() : void 0, l = so(l) || '', m = aI($H.getInstance(), a), BRa(l, a.visualElement ? a.visualElement : mo(m), 'INTERACTION_LOGGING_GESTURE_TYPE_HOVER', {
        hoverData: {
          durationHoveredMs: h
        }
      }));
      HRa(a)
    }, function () {
      eI && (eI(), eI = null);
      d && (IRa(a), HRa(a))
    });
    return f
  }


// 2024 version
  e.then(
    function () {
      var g = Kk() - b;
      g = Math.round(g);
      if (!(500 > g || 600000 <= g)) {
        var k = a.getScreenLayer ? a.getScreenLayer() : void 0;
        k = Sp(k) ||
        '';
        var m = pJa(Iq(), a);
        hJa(
          k,
          a.visualElement ? a.visualElement : Pp(m),
          'INTERACTION_LOGGING_GESTURE_TYPE_HOVER',
          {
            hoverData: {
              durationHoveredMs: g
            }
          }
        )
      }
      Vlb(a)
    },
    function () {
      zA &&
      (zA(), zA = null);
      d &&
      (Wlb(a), Vlb(a))
    }
  );
  return e
  }
```

![4c3eb99c47c0125628e4ad5e8e81c7974c8d2d14](images/4c3eb99c47c0125628e4ad5e8e81c7974c8d2d14.jpeg)

## Hard coding Taylorism

I want to draw the attention to this to values 500 and 600000. In the computer coding jargon they are called hard coded values. They are immutable.
Usually is something that programmers avoid to use, except for specific purposes, like the one showed above.

Nevertheless, hardcoded values are often stored in a variable, and given a proper name for maintainability. Now this does not apply to production code as they are saving as much memory as possible, therefore less variable names are better.

To me this leads to a paradoxical situation. Or at least I see a paradox, due to the fact that all of the analyzed code was obfuscated by using combinations of 2 ~ 3 letters in place of proper naming conventions. And yet here where I would expect more secrecy, there is no use of variables, and the values are human readable.

And this readability clearly gives away what is happening in this few lines of code. A value related to hovering over a video thumbnail is measured against this hardcode values. Whether the user is hovering for more than 1/2 second [500ms] or less than 10minutes [600000ms].

Hovering duration is measured against those two values. and it is fair then to assume that those two values represent 2 hard boundaries, for what is considered a *"mouseover"* event, as the strings in clear view tell us.

Given the infrastructural magnitude of youtube, it is fair to assume that such hard coded values, hopefully, are not casual. And so, those values left so visible for everyone to read must represent the measurements for what can be considered productive, and un productive hovering over thumbnails. So to say hard thresholds "*_to_consider_mouseover_as_hover*". Describing a timespan of struggle.

Therefore, hovering between those two boundaries represents a type of hovering, that contributes to the production of surplus value. So to say those two boundaries represent the timeframe for when a user is actively contributing to make the company profitable and when not. Therefore, it is possible to speculate that when hovering for less than 500ms, this action is not contributing to the payment of server infrastructure. Or by hovering for more than 10 minutes you might impact on the revenue so that next month some software developers might be fired, or a CEO needs to be replaced.

![](images/FB_FIRING_OVER_CODE-00.png)

[Code from FaceBook.com, found with students during a counter data practices class in 2019]