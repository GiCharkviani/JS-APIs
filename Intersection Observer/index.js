const section1 = document.querySelector(".section-1");

const obsCallback = function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
  });
};

const obsOptions = {
  root: null,
  //Threshold გვიჩვენებს რამდენი პროცენტი უნდა ჩანდეს იმ ელემენტის, რომელსაც ვაკვირდებით.
  //როდესაც ამ შემთხვევაში გამოჩნდება ელემენტის 10% გამოიძახება Callback ფუნქცია.
  threshold: 0.1,
};

const observer = new IntersectionObserver(obsCallback, obsOptions);

observer.observe(section1);

// იმისთვის, რომ შევძლოთ ყველა სექციაზე დაკვირვება:
const allSections = document.querySelectorAll(".section");

const callback = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  // ობზერვერს უნდა გავუკეთოთ unobserve
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(callback, {
  root: null,
  threshhold: 0.1,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
});
