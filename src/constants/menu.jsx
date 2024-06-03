import React from "react";
import FolderCokelat from "../assets/folder-cokelat.png";
import FolderKuning from "../assets/folder-kuning.png";
import File from "../assets/file.png";


const Menu = [
  {
    title: "FAVORITES",
    icon: FolderCokelat,
  },
  {
    title: "HOME",
    icon: FolderCokelat,
  },
  {
    title: "SELF SERVICE",
    icon: FolderCokelat,
    childrens: [
      {
        title: "Academic Planning",
        icon : FolderKuning,
        childrens: [
          {
            title: "Class Search",
            icon : File,
            path: "/",
          },
          {
            title: "My Course History",
            icon : File,
            path: "/",
          },
          {
            title: "My Weekly History",
            icon : File,
            path: "/",
          },
          {
            title: "Enrollment: Add/Drop Classes",
            icon : File,
            path: "/krs",
          },
          {
            title: "Enrollment: Shoping Cart",
            icon : File,
            path: "/",
          },
        ],
      },
      {
        title: "Academic Records",
        path: "/",
        icon : FolderKuning,
        childrens : [
          {
            title: "My Course History",
            icon : File,
            path: "/",
          },
          {
            title: "My Advisors",
            icon : File,
            path: "/",
          },
          {
            title: "My Attendance Roaster",
            icon : File,
            path: "/",
          },
          
        ]
      },
     
    ],
  },
  {
    title: "STUDENT FINANCIALS",
    icon: FolderCokelat,
    childrens: [
      {
        title: "Campus Finances",
        icon : FolderKuning,
        path: "/",
        childrens:[
          {
            title: "Account Inquiry",
            icon : File,
            path:"/"
          },
          {
            title: "Enroll in Payment Plan",
            icon : File,
            path:"/"
          },
          {
            title: "Virtual Bank Account Details",
            icon : File,
            path:"/"
          },
        ]
      },
    ],
  },
  {
    title: "CAMPUS COMUNITY",
    icon: FolderCokelat,
    childrens: [
      {
        title: "Degree/Progress Graduation",
        icon : FolderKuning,
        childrens:[
          {
            title:"My Academic Requirements",
            icon : File,
            path:"/",
          },
          {
            title:"View Transfer Credit Report",
            icon : File,
            path:"/",
          },
          {
            title:"Research Activities",
            icon : File,
            path:"/",
          },
          {
            title:"Student Grade Detail",
            icon : File,
            path:"/",
          },
          {
            title:"Graduation Registration",
            icon : File,
            path:"/",
          },
        ]
      }
    ]
  },
  {
    title: "REPORTING TOOLS",
    icon: FolderCokelat,
    path: "/",
  },
  {
    title: "PEPLE TOOLS",
    icon: FolderCokelat,
  
  },
  {
    title: "CEK JADWAL SIDANG",
    icon : File,
    path: "/",
  },
  {
    title: "ACADEMIC EVALUATION",
    icon : File,
    
  },
  {
    title: "MY EXAM TIMETABLE",
    icon : File,
    path: "/",
  },
  {
    title: "STUDENT CENTER",
    icon : File,
    
  },
  {
    title: "KUESIONER MAHASISWA BARU",
    icon : File,
    path: "/",
  },
  {
    title: "SKP RECAP - STUDENT",
    icon : File,
    
  },
  {
    title: "UPLOAD SKP - STUDENT",
    icon : File,
    path: "/",
  },
  {
    title: "UPLOAD DOCUMENT MAHASISWA",
    icon : File,
    
  },
  {
    title: "SERVICE REQUEST",
    icon : File,
    path: "/",
  },
  {
    title: "STUDENT STATUS",
    icon : File,
    
  },
  {
    title: "KUESIONER KEPUASAN MAHASISWA",
    icon : File,
    path: "/",
  },
  {
    title: "KUESIONER PEMETAAN MHS BARU",
    icon : File,
    
  },
  {
    title: "REQUEST LETTERS",
    icon : File,
    path: "/",
  },
 
];

export default Menu;











