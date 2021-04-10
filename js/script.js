$(document).ready(function () {
  var animations = [
    {
      time: 3000,
      step: "step-2",
      selector: ".bar",
    },
    {
      // Activate the third step
      time: 3000,
      step: "step-3",
      selector: ".bar",
    },
    {
      // Activate the fourth step
      time: 3000,
      step: "step-4",
      selector: ".bar",
    },
    {
      // Activate the fifth step
      time: 3000,
      step: "step-5",
      selector: ".bar",
    },
  ];
  function run(i, timeline) {
    setTimeout(function () {
      $(animations[i].selector).addClass(animations[i].step);
    }, timeline);
  }
  function animationTimeline() {
    var timeline = 0;
    for (var i = 0; i < animations.length; i++) {
      timeline = parseInt(animations[i].time, 10) + parseInt(timeline, 10);
      run(i, timeline);
    }
  }
  $("#run").click(function () {
    animationTimeline();
  });
  $("#restart").click(function () {
    $(".bar").removeClass("step-2 step-3 step-4 step-5");
    animationTimeline();
  });
});
