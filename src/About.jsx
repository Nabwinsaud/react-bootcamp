const students = {
  name: "Nabin",
  age: 19,
  email: "nabin@gmail.com",
  location: "kathmandu",
}; // MAP - key-value

console.log(students["email"]);

// object destructing
// array
const { age, ...others } = students;
console.log(others);

console.log(age);
const About = () => {
  return <div>About</div>;
};

export default About;
