---
layout: about
title: about
permalink: /
subtitle: Interaction Design and Software Engineering, Chalmers & University of Gothenburg

profile:
  align: right
  image: ICET-Lab-LOGO-A2.png
  image_circular: true # crops the image to make it circular
  more_info: >
    <p>Internet Computing and Emerging Technologies lab</p>
    <p>(ICET-lab)</p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: false # adds a vertical scroll bar if there are more than 3 news items
  limit:  # TODO does this work? leave blank to include all the news in the `_news` folder
---

The Internet Computing and Emerging Technologies lab (ICET-lab) is a research group of at the <a href="https://www.chalmers.se/en/departments/cse/our-research/interaction-design-and-software-engineering/">Interaction Design and Software Engineering division</a> at <a href="https://www.chalmers.se/">Chalmers</a> and the <a href="https://www.gu.se/en">University of Gothenburg</a>. We conduct research on software engineering for distributed, Web, and cloud-based systems, particularly related to issues of software performance. The lab is led by <a href="http://philippleitner.net/">Dr. Philipp Leitner</a>, associate professor at Chalmers, and currently entails two faculty, one postdoc, and two PhD students.


<div style="width: 55%; margin: 1.5rem auto;">
  <div id="groupPhotoCarousel" class="carousel slide z-depth-1" data-ride="carousel" data-interval="6000">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="{{ '/assets/img/ICET_Lab/GroupPicture-cropped.jpg' | relative_url }}" class="d-block w-100 img-fluid" alt="Group picture from summer 2026">
      </div>
      <div class="carousel-item">
        <img src="{{ '/assets/img/ICET_Lab/38A1119.jpg' | relative_url }}" class="d-block w-100 img-fluid" alt="Group picture from fall 2024">
      </div>
    </div>
    <a class="carousel-control-prev" href="#groupPhotoCarousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#groupPhotoCarousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  <p id="groupPhotoCaption" style="margin-top: 0.5rem; font-size: 0.9rem;">
    Group picture from summer 2026<br>
    (from left to right: Larissa Salerno, Francisco Gomes, Linda Erlenhov, Philipp Leitner, Gregory Gay, Ranim Khojah, Lirong Yi)
  </p>
</div>

<script>
(function() {
  var captions = [
    'Group picture from summer 2026<br>(from left to right: Larissa Salerno, Francisco Gomes, Linda Erlenhov, Philipp Leitner, Gregory Gay, Ranim Khojah, Lirong Yi)',
    'Group picture from fall 2024<br>(from left to right: Philipp Leitner, Peter Samoaa, Matei Schiopu, Ranim Khojah, Francisco Gomes, Linda Erlenhov)'
  ];
  var el = document.getElementById('groupPhotoCarousel');
  if (el) {
    el.addEventListener('slid.bs.carousel', function(e) {
      document.getElementById('groupPhotoCaption').innerHTML = captions[e.to];
    });
  }
})();
</script>
