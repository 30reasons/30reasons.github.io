---
layout: all
title: All reasons
bodyClass: sec-all theme-blue
permalink: reasons/index.html
---

Each day leading up to the election, 30 designers and artists will offer their reasons for supporting Hillary Clinton for President. 

The outcome of this election is not a foregone conclusion. It’s up to all of us to speak up in support of Hillary’s message that we’re stronger together, voice our opposition to Trump’s racist, sexist and hateful rhetoric and vote on November 8th.

All together we raise our voices and say, I’m with her!

<h2 id="Follow">Follow and subscribe</h2>

Don’t miss a single reason. You have three options: [follow us on Twitter](https://twitter.com/30reasons), [join us on Facebook](https://www.facebook.com/30Reasons), or [subscribe to our mailing list](http://eepurl.com/chpUtD).

## Contact

Your questions or comments are welcome. Please direct all correspondence to [info@30reasons.org](mailto:info@30reasons.org). We read everything we receive, but can’t promise to respond to all messages.

## Credits

30 Reasons is organized and curated by Chris and Julia Thomas. They are partners at [Hieronymus](http://www.hieronymus.co), and believe that designers have the duty to stand up, speak out, and help promote social justice.

The website was designed and built by Adam Snetman, founder of [Starting Now](http://www.startingnow.co).

<!--
Posters were generously contributed by{% for reason in site.reasons %}{% if forloop.index <= site.currentReason %}{% if forloop.index == site.currentReason and site.currentReason != 1 %} and{% endif %} [{{ reason.artist }}]({{ reason.url | prepend: site.github.url }}){% unless forloop.index == site.currentReason or site.currentReason == 2 %},{% endunless %}{% else %}{% break %}{% endif %}{% endfor %}.
-->
