import { useState } from "react";
import "./App.css";
import "./index.css";


const studentsData = [
  {
    id: 1,
    rollNo: "720823104001",
    name: "ABINAYA B",
    class: "III ECE A",
    attendance: "absent",
  },
  {
    id: 2,
    rollNo: "720823104002",
    name: "ABIRAMI P",
    class: "III ECE A",
    attendance: "Absent",
  },
  {
    id: 3,
    rollNo: "720823104003",
    name: "ABIRAMI P",
    class: "III ECE A",
    attendance: "Absent",
  },
  {
    id: 4,
    rollNo: "720823104004",
    name: "ABISHEK K.V",
    class: "III ECE A",
    attendance: "Absent",
  },
  {
    id: 5,
    rollNo: "720823104005",
    name: "ABISHITH M",
    class: "III ECE A",
    attendance: "Absent",
  },
  {
    id: 6,
    rollNo: "720823104006",
    name: "ADHARSH R",
    class: "III ECE A",
    attendance: "Absent",
  },
  {
    id: 7,
    rollNo: "720823104007",
    name: "ADHITHIYAN N",
    class: "III ECE A",
    attendance: "Absent",
  },
  {
    id: 8,
    rollNo: "720823104008",
    name: "ADHITHIYAN S",
    class: "III ECE A",
    attendance: "Absent",
  },
  {
    id: 9,
    rollNo: "720823104009",
    name: "ADITHYA SIMHAN C P",
    class: "III ECE A",
    attendance: "Absent",
  },
  {
    id: 10,
    rollNo: "7208231040010",
    name: "AFFRIN BANU N",
    class: "III ECE A",
    attendance: "Absent",
  },
  {
    id: 11,
    rollNo: "7208231040011",
    name: "DHARSHIGA SHRI PK",
    class: "III ECE A",
    attendance: "Absent",
  },
  {
    id: 12,
    rollNo: "7208231040012",
    name: "ASHA DAFFNY D",
    class: "III ECE A",
    attendance: "Absent",
  },
  {
    id: 13,
    rollNo: "7208231040013",
    name: "DEVADARSHINI S",
    class: "III ECE A",
    attendance: "Absent",
  },
  {
    id: 14,
    rollNo: "7208231040014",
    name: "ISHWARYA R",
    class: "III ECE A",
    attendance: "Absent",
  },
  {
    id: 15,
    rollNo: "7208231040015",
    name: "LAVANYA G",
    class: "III ECE A",
    attendance: "Absent",
  },
  {
  id: 16,
  rollNo: "720823104016",
  class: "III ECE A",
  name: "ALAGU BALA MUKESH R",
  attendance: "Absent"
},
{
  id: 17,
  rollNo: "720823104017",
  class: "III ECE A",
  name: "ALAN SASI S",
  attendance: "Absent"
},
{
  id: 18,
  rollNo: "720823104018",
  class: "III ECE A",
  name: "ANTONY L",
  attendance: "Absent"
},
{
  id: 19,
  rollNo: "720823104019",
  class: "III ECE A",
  name: "ARCHANA V",
  attendance: "Absent"
},
{
  id: 20,
  rollNo: "720823104020",
  class: "III ECE A",
  name: "ARRSHID RAHMAN A",
  attendance: "Absent"
},
];

function App() {
  const [students, setStudents] = useState(studentsData);
  const [search, setSearch] = useState("");

  const toggleAttendance = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? {
              ...student,
              attendance:
                student.attendance === "Present"
                  ? "Absent"
                  : "Present",
            }
          : student
      )
    );
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  const total = students.length;

  const present = students.filter(
    (student) => student.attendance === "Present"
  ).length;

  const absent = total - present;

  const percentage = ((present / total) * 100).toFixed(0);

  return (
    <div className="dashboard">
      <header className="header">
        <h1>
          🏫 Hindusthan institute of Technology
        </h1>

        <p>🌐 www.hindusthan.net</p>

        <p>
          📍 Othakkalmandapam, Coimbatore,
          Tamil Nadu
        </p>

        <p>📧 info@hindusthan.net</p>

        <p>📞 +91 422 4440555</p>

        <h2>
          🎓 Department of Electronics and Communication Engineering
        </h2>

        <h3>Academic Year : 2026 - 2027</h3>
      </header>

      <div className="cards">
        <div className="card blue">
          <h2>{total}</h2>
          <p>Total Students</p>
        </div>

        <div className="card green">
          <h2>{present}</h2>
          <p>Present</p>
        </div>

        <div className="card red">
          <h2>{absent}</h2>
          <p>Absent</p>
        </div>

        <div className="card purple">
          <h2>{percentage}%</h2>
          <p>Attendance %</p>
        </div>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="🔍 Search Student..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      <table className="attendance-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Roll No</th>
            <th>Name</th>
            <th>Class</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>

              <td>{student.rollNo}</td>

              <td>{student.name}</td>

              <td>{student.class}</td>

              <td>
                <span
                  className={
                    student.attendance ===
                    "Present"
                      ? "present"
                      : "absent"
                  }
                >
                  {student.attendance}
                </span>
              </td>

              <td>
                <button
                  className="toggle-btn"
                  onClick={() =>
                    toggleAttendance(student.id)
                  }
                >
                  {student.attendance ===
                  "Present"
                    ? "Mark Absent"
                    : "Mark Present"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <footer className="footer">
        <p>
          © 2026 Hindusthan College of
          Engineering and Technology
        </p>

        <p>
          Student Attendance Management
          System
        </p>
      </footer>
    </div>
  );
}

export default App;