import Route from "@ember/routing/route";

export default class EventsRoute extends Route {
  async model() {
    return {
      listOfSessions: [
				{
          topicName: "How to be amazing",
          speakerName: "ME ME ME",
          speakerInfo: "Works at being awesome",
          topicBullets: ["How to rock", "LOL", "Cool stuff"]
        },
        {
          topicName: "Introduction to Ember",
          speakerName: "Akanksha Dharkar",
          speakerInfo: "Works at LinkedIn",
          topicBullets: ["Routes", "Components", "EmberJS Cool stuff"]
        },
        {
          topicName: "Object oriented pattern in JavaScript",
          speakerName: "Kratika Chowdhary",
          speakerInfo: "Works at Eli Lilly and Company",
          topicBullets: [
            "Different patterns for implementing objects like factory, hybrid and parasitic",
            "What is prototype and how it works"
          ]
        },
        {
          topicName: "Async programming with JavaScript",
          speakerName: "Nikhil Bhandarkar",
          speakerInfo: "Works at WayCool Foods & Products Pvt Ltd",
          topicBullets: ["Callbacks", "Promises", "Async / Await"]
        },
        {
          topicName: "Closures and Promises",
          speakerName: "Ramya Parthiban",
          speakerInfo: "Works at Walmart labs",
          topicBullets: ["Closures", "Promises"]
        },
        {
          topicName: "What the hell is this?",
          speakerName: "Sahil Kapoor",
          speakerInfo: "Works at Wizikey",
          topicBullets: [
            "Basic definition of this",
            "Different Types of binding",
            "The new binding",
            "Binding Precedence"
          ]
        },
        {
          topicName: "REST APIs and gRPC",
          speakerName: "Sandeep Sinha Mahapatra",
          speakerInfo: "Works at",
          topicBullets: [
            "What is REST?",
            "What is statelessness?",
            "GET , POST , PUT , DELETE",
            "Headers, content type etc.",
            "What is gRPC , and how it is different from REST."
          ]
        },
        {
          topicName: "Js concepts",
          speakerName: "Shihabudheen US",
          speakerInfo: "Works at Dunzo",
          topicBullets: [
            "Event Loop",
            "Call stack",
            "setTimeout",
            "Callback Queue",
            "What is gRPC , and how it is different from REST."
          ]
        },
        {
          topicName:
            "Performance Matters - Optimization Techniques You Need to Know",
          speakerName: "Sridharan Jayabal",
          speakerInfo: "Works at DocOn Technologies",
          topicBullets: [
            "Optimization Cheatsheet: Reducing the size(js files, images, css sprites, modules conversion)",
            "gzip vs brotli",
            "CDNs, caching, loading techniques, asset placement",
            "optimizing DOM manipulation and code",
            "What is gRPC , and how it is different from REST."
          ]
        },
        {
          topicName: "CSS Positioning and Flexbox",
          speakerName: "Satyam Bansal",
          speakerInfo: "Works at Pesto",
          topicBullets: [
            "CSS Positioning overview",
            "CSS Flexbox introduction",
            "Why CSS flexbox is an essential skill for every developer",
            "CSS flexbox useful properties and real world example demo"
          ]
        }
      ]
    };
  }
}
