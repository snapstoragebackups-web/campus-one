// Comprehensive Initial Mock Data for Smart Campus Platform

export const initialStudent = {
  id: "22CS084",
  name: "Rahul Sharma",
  email: "rahul.sharma@campus.edu",
  phone: "+91 98765 43210",
  program: "B.Tech Computer Science & Engineering",
  year: "3rd Year",
  semester: "6th Semester",
  cgpa: "8.84",
  hostel: "B-Block (Boys)",
  roomNo: "B-304",
  wardenName: "Dr. K. Verma",
  emergencyContact: "+91 98765 00112 (Father)",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
};

export const initialAttendance = {
  overallPercentage: 81.9,
  minRequired: 75.0,
  totalAttended: 195,
  totalClasses: 238,
  subjects: [
    {
      id: "CS601",
      code: "CS601",
      name: "Data Structures & Algorithms",
      attended: 38,
      total: 42,
      faculty: "Prof. Arvind Mehta",
      percentage: 90.5,
      canMiss: 8,
      needsAttend: 0,
      status: "Safe"
    },
    {
      id: "CS602",
      code: "CS602",
      name: "Operating Systems & Kernels",
      attended: 28,
      total: 40,
      faculty: "Dr. Neha Kulkarni",
      percentage: 70.0,
      canMiss: 0,
      needsAttend: 8, // Needs 8 consecutive classes to reach 75%
      status: "Critical Risk"
    },
    {
      id: "CS603",
      code: "CS603",
      name: "Database Management Systems",
      attended: 34,
      total: 40,
      faculty: "Prof. Rajesh Pillai",
      percentage: 85.0,
      canMiss: 5,
      needsAttend: 0,
      status: "Safe"
    },
    {
      id: "CS604",
      code: "CS604",
      name: "Computer Networks & Security",
      attended: 27,
      total: 38,
      faculty: "Dr. Sunita Deshmukh",
      percentage: 71.1,
      canMiss: 0,
      needsAttend: 5, // Needs 5 consecutive classes to reach 75%
      status: "At Risk"
    },
    {
      id: "CS605",
      code: "CS605",
      name: "Artificial Intelligence & ML",
      attended: 36,
      total: 40,
      faculty: "Dr. Sameer Bansal",
      percentage: 90.0,
      canMiss: 8,
      needsAttend: 0,
      status: "Safe"
    },
    {
      id: "MA601",
      code: "MA601",
      name: "Applied Probability & Statistics",
      attended: 32,
      total: 38,
      faculty: "Prof. Deepa Nair",
      percentage: 84.2,
      canMiss: 4,
      needsAttend: 0,
      status: "Safe"
    }
  ]
};

export const initialTimetable = [
  {
    id: "TT-01",
    day: "Monday",
    time: "09:00 AM - 10:15 AM",
    subject: "Data Structures & Algorithms",
    code: "CS601",
    faculty: "Prof. Arvind Mehta",
    room: "Tech Block 3 - Hall 204",
    status: "Completed",
    isRoomChanged: false
  },
  {
    id: "TT-02",
    day: "Monday",
    time: "10:30 AM - 11:45 AM",
    subject: "Operating Systems & Kernels",
    code: "CS602",
    faculty: "Dr. Neha Kulkarni",
    room: "CS Lab 4 (Shifted from LH-101)",
    status: "Live Now",
    isRoomChanged: true,
    alertNote: "Lab relocated to CS Lab 4 due to projector maintenance in LH-101."
  },
  {
    id: "TT-03",
    day: "Monday",
    time: "01:30 PM - 02:45 PM",
    subject: "Database Management Systems",
    code: "CS603",
    faculty: "Prof. Rajesh Pillai",
    room: "Seminar Hall B",
    status: "Upcoming",
    isRoomChanged: false
  },
  {
    id: "TT-04",
    day: "Monday",
    time: "03:00 PM - 05:00 PM",
    subject: "AI & ML Hands-on Lab",
    code: "CS605L",
    faculty: "Dr. Sameer Bansal",
    room: "Turing Computing Lab 2",
    status: "Upcoming",
    isRoomChanged: false
  },
  {
    id: "TT-05",
    day: "Tuesday",
    time: "09:00 AM - 10:15 AM",
    subject: "Computer Networks & Security",
    code: "CS604",
    faculty: "Dr. Sunita Deshmukh",
    room: "Tech Block 2 - Room 302",
    status: "Upcoming",
    isRoomChanged: false
  },
  {
    id: "TT-06",
    day: "Tuesday",
    time: "10:30 AM - 11:45 AM",
    subject: "Applied Probability & Statistics",
    code: "MA601",
    faculty: "Prof. Deepa Nair",
    room: "Main Lecture Complex - Hall A",
    status: "Upcoming",
    isRoomChanged: false
  }
];

export const initialGatePasses = [
  {
    id: "GP-9021",
    studentId: "22CS084",
    studentName: "Rahul Sharma",
    hostel: "B-Block, Room 304",
    purpose: "Weekend Home Visit",
    destination: "Pune, Maharashtra",
    outTime: "2026-10-02 17:00",
    inTime: "2026-10-04 20:30",
    parentContact: "+91 98765 00112",
    status: "Approved",
    qrData: "GATEPASS-GP9021-22CS084-VALID-OCT02-OCT04",
    approvedBy: "Dr. K. Verma (Chief Warden)",
    approvedAt: "2026-09-28 14:20",
    remarks: "Parent confirmed over phone call. Return before 8:30 PM Sunday strictly."
  },
  {
    id: "GP-9045",
    studentId: "22CS084",
    studentName: "Rahul Sharma",
    hostel: "B-Block, Room 304",
    purpose: "State Inter-College Hackathon at Tech City Park",
    destination: "Tech City Convention Centre",
    outTime: "2026-10-08 08:00",
    inTime: "2026-10-09 21:00",
    parentContact: "+91 98765 00112",
    status: "Pending",
    qrData: null,
    approvedBy: null,
    approvedAt: null,
    remarks: "Faculty mentor Dr. Sameer Bansal endorsement attached."
  },
  {
    id: "GP-8832",
    studentId: "22CS084",
    studentName: "Rahul Sharma",
    hostel: "B-Block, Room 304",
    purpose: "Doctor Appointment & Medical Tests",
    destination: "Apollo Clinic, MG Road",
    outTime: "2026-09-20 15:00",
    inTime: "2026-09-20 19:30",
    parentContact: "+91 98765 00112",
    status: "Approved",
    qrData: "GATEPASS-GP8832-USED",
    approvedBy: "Caretaker S. Rathore",
    approvedAt: "2026-09-20 14:10",
    remarks: "Medical prescription verified. Returned on time."
  }
];

export const initialCertificates = [
  {
    id: "CERT-401",
    studentId: "22CS084",
    studentName: "Rahul Sharma",
    type: "Bonafide Certificate",
    purpose: "Passport Renewal & Visa Application",
    urgency: "Standard",
    requestedAt: "2026-09-25 11:30",
    status: "Ready",
    documentUrl: "#",
    verifiedBy: "Academic Registrar Office",
    serialNo: "CAMPUS/ACAD/2026/BF-8910",
    remarks: "Digitally signed with cryptographic QR verification stamp."
  },
  {
    id: "CERT-422",
    studentId: "22CS084",
    studentName: "Rahul Sharma",
    type: "Tuition Fee Paid Receipt",
    purpose: "SBI Education Loan Reimbursement",
    urgency: "Urgent",
    requestedAt: "2026-09-28 09:15",
    status: "In Progress",
    documentUrl: null,
    verifiedBy: "Accounts Section",
    serialNo: null,
    remarks: "Verification with bank transaction ref UTR-982194 in progress."
  },
  {
    id: "CERT-389",
    studentId: "22CS084",
    studentName: "Rahul Sharma",
    type: "Character & Conduct Certificate",
    purpose: "Summer Research Fellowship at IIT",
    urgency: "Standard",
    requestedAt: "2026-08-14 16:00",
    status: "Ready",
    documentUrl: "#",
    verifiedBy: "Dean of Student Affairs",
    serialNo: "CAMPUS/ACAD/2026/CC-2219",
    remarks: "Exemplary conduct record certified."
  }
];

export const initialComplaints = [
  {
    id: "HC-1082",
    studentId: "22CS084",
    studentName: "Rahul Sharma",
    hostel: "B-Block",
    roomNo: "B-304",
    category: "Wi-Fi & Internet",
    title: "Hostel Wi-Fi frequent disconnects during online lab assessments",
    description: "The access point near room 304 loses DNS connection every 15 minutes, affecting four rooms in our corridor.",
    priority: "High",
    status: "In Progress",
    submittedAt: "2026-09-27 16:40",
    assignedTo: "Network Engr. Aniket Sen",
    photoUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=300&auto=format&fit=crop&q=80",
    timeline: [
      { step: "Submitted", time: "Sep 27, 4:40 PM", note: "Categorized as High Priority network issue" },
      { step: "Assigned", time: "Sep 27, 6:15 PM", note: "Assigned to Network Operations Team" },
      { step: "In Progress", time: "Sep 28, 10:00 AM", note: "Technician inspecting Switch B-302" }
    ],
    studentFeedback: null
  },
  {
    id: "HC-1094",
    studentId: "22CS084",
    studentName: "Rahul Sharma",
    hostel: "B-Block",
    roomNo: "B-304",
    category: "Plumbing & Water",
    title: "Washbasin tap leakage and low water pressure",
    description: "Continuous dripping water causing wastage and pool on floor. Washer needs immediate replacement.",
    priority: "Medium",
    status: "Assigned",
    submittedAt: "2026-09-28 08:30",
    assignedTo: "Plumber Rameshwar",
    photoUrl: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=300&auto=format&fit=crop&q=80",
    timeline: [
      { step: "Submitted", time: "Sep 28, 8:30 AM", note: "Logged into maintenance tracker" },
      { step: "Assigned", time: "Sep 28, 11:00 AM", note: "Job scheduled for 3:00 PM today" }
    ],
    studentFeedback: null
  },
  {
    id: "HC-1025",
    studentId: "22CS084",
    studentName: "Rahul Sharma",
    hostel: "B-Block",
    roomNo: "B-304",
    category: "Electricity & Power",
    title: "Ceiling fan making screeching noise and sparking switch",
    description: "Fan regulator sparking when adjusted, potential fire risk.",
    priority: "Urgent",
    status: "Resolved",
    submittedAt: "2026-09-18 20:15",
    assignedTo: "Electrician Mukesh",
    photoUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=300&auto=format&fit=crop&q=80",
    timeline: [
      { step: "Submitted", time: "Sep 18, 8:15 PM", note: "Urgent electrical alert generated" },
      { step: "Assigned", time: "Sep 18, 8:30 PM", note: "Night-shift emergency electrician dispatched" },
      { step: "In Progress", time: "Sep 18, 9:00 PM", note: "Capacitor and switchboard module replaced" },
      { step: "Resolved", time: "Sep 18, 9:45 PM", note: "Tested and verified safe by Caretaker" }
    ],
    studentFeedback: {
      rating: 5,
      comment: "Super quick response in under 2 hours at night! Very thankful."
    }
  }
];

export const initialNotices = [
  {
    id: "NOT-901",
    title: "Mid-Term Examination Dates & Admit Card Download",
    category: "Exams",
    priority: "Urgent",
    date: "2026-09-28",
    target: "All B.Tech / M.Tech Students",
    summary: "Odd-semester examinations commence on October 18, 2026. Hall tickets available on portal after fee dues clearance.",
    isRead: false,
    content: "All undergraduate and postgraduate students are hereby notified that the Mid-Term theory & lab examinations for Autumn 2026 session will begin from October 18, 2026. Admit cards will be generated automatically once library dues and semester fees are settled. Please report discrepancies to Exam Cell before Oct 10.",
    deadline: "2026-10-18"
  },
  {
    id: "NOT-898",
    title: "Semester Fee Payment Deadline Extension & Late Fee Penalty",
    category: "Fees",
    priority: "Important",
    date: "2026-09-26",
    target: "Pending Fee Students",
    summary: "Last date to pay remainder hostel and term fees is extended to October 15, 2026 without late fine.",
    isRead: true,
    content: "In response to representations from the Student Council, the Finance Committee has approved extending the fee payment deadline till October 15, 2026, 11:59 PM. Post deadline, a late fee of ₹200/day will apply.",
    deadline: "2026-10-15"
  },
  {
    id: "NOT-884",
    title: "Hostel Maintenance & Energy Conservation Directive",
    category: "Hostel",
    priority: "Normal",
    date: "2026-09-24",
    target: "Hostel Residents",
    summary: "Routine solar geyser overhaul scheduled this weekend. High-power appliances strictly prohibited in rooms.",
    isRead: true,
    content: "Solar water heating system descaling will take place on Saturday between 10 AM to 2 PM. Also, students are reminded that high wattage induction plates and immersion rods are prohibited in hostel rooms for fire safety.",
    deadline: null
  },
  {
    id: "NOT-870",
    title: "Annual Tech Fest 'Innovate 2026' - Call for Student Organizers",
    category: "Events",
    priority: "Normal",
    date: "2026-09-22",
    target: "All Students",
    summary: "Registrations open for Technical, Sponsorship, Logistics, and PR Committees for the flagship annual tech festival.",
    isRead: false,
    content: "Innovate 2026 will host over 50 hackathons, robot wars, coding challenges, and startup summits. Interested student coordinators can submit their applications before October 5.",
    deadline: "2026-10-05"
  }
];

export const initialMessData = {
  currentDay: "Monday",
  menu: {
    Monday: {
      breakfast: "Poha with Roasted Peanuts, Sprouted Moong, Boiled Eggs / Banana, Tea / Filter Coffee",
      lunch: "Paneer Butter Masala (Veg), Rajma Masala, Steamed Basmati Rice, Phulkas, Fresh Curd, Green Salad",
      snacks: "Crispy Veg Cutlet with Mint Chutney, Hot Masala Tea / Milk",
      dinner: "Dum Aloo Kashmiri / Chicken Biryani (Non-Veg counter), Raita, Yellow Dal Tadka, Tandoori Roti, Gulab Jamun"
    },
    Tuesday: {
      breakfast: "Idli, Medu Vada with Coconut Chutney & Piping Sambar, Boiled Eggs, Tea / Coffee",
      lunch: "Chole Bhature / Steamed Rice, Palak Paneer, Boondi Raita, Onion Cucumber Salad",
      snacks: "Sweet Corn Chaat & Cookies, Tea",
      dinner: "Methi Malai Matar, Dal Makhani, Jeera Rice, Butter Naan, Rice Kheer"
    },
    Wednesday: {
      breakfast: "Aloo Paratha with White Butter, Pickle, Dahi, Fresh Fruit, Tea / Coffee",
      lunch: "Kadai Paneer, Veg Pulao, Tadka Dal, Phulkas, Boondi Raita, Papad",
      snacks: "Samosa with Tamarind Chutney, Adrak Chai",
      dinner: "Egg Curry / Malai Kofta, Steamed Rice, Dal Fry, Phulkas, Rasgulla"
    },
    Thursday: {
      breakfast: "Masala Dosa with Sambar & Tomato Chutney, Boiled Eggs, Tea / Coffee",
      lunch: "Bhindi Do Pyaza, Dal Tadka, Peas Pulao, Chapati, Dahi, Kachumber",
      snacks: "Pav Bhaji (2 pcs), Lemon Mint Tea",
      dinner: "Paneer Tikka Masala, Dal Makhani, Jeera Rice, Tandoori Roti, Moong Dal Halwa"
    },
    Friday: {
      breakfast: "Upma with Coconut Chutney, Sheera, Boiled Eggs / Fruit, Tea / Coffee",
      lunch: "Mix Veg Handi, Dal Panchmel, Steamed Rice, Roti, Fresh Buttermilk",
      snacks: "Bhel Puri / Sev Puri, Tea",
      dinner: "Veg / Egg / Chicken Fried Rice, Veg Manchurian Gravy, Hakka Noodles, Ice Cream"
    },
    Saturday: {
      breakfast: "Uttapam with Sambar & Chutney, Sprouts, Tea / Coffee",
      lunch: "Kadhi Pakora, Khichdi / Steamed Rice, Aloo Jeera, Phulkas, Papad",
      snacks: "Bread Pakora with Green Chutney, Ginger Tea",
      dinner: "Shahi Paneer, Dal Maharani, Jeera Rice, Butter Roti, Fruit Custard"
    },
    Sunday: {
      breakfast: "Puri Bhaji with Halwa, Boiled Eggs, Fresh Juice / Milk, Tea / Coffee",
      lunch: "Special Feast: Paneer Lababdar, Hyderabadi Veg Biryani, Raita, Garlic Naan, Rasmalai",
      snacks: "Biscuits & Tea / Coffee",
      dinner: "Light Khichdi, Tomato Soup, Pav, Dal Fry, Seasonal Fresh Fruit"
    }
  },
  ratings: [
    { id: "R-1", student: "Rahul S.", meal: "Monday Lunch", rating: 4, comment: "Paneer was fresh and hot, curd was chilled!", time: "Today 1:50 PM" },
    { id: "R-2", student: "Sneha P.", meal: "Monday Breakfast", rating: 5, comment: "Poha was nicely seasoned with roasted peanuts.", time: "Today 9:10 AM" },
    { id: "R-3", student: "Amit K.", meal: "Sunday Dinner", rating: 3, comment: "Soup was a bit bland, but fruit was good.", time: "Yesterday" }
  ],
  stats: {
    averageRating: 4.3,
    hygieneScore: 96,
    activeDietaryDiet: "Standard Student Mess Plan",
    totalFeedbackThisWeek: 418
  }
};

export const initialFeeData = {
  totalFee: 145500,
  paidFee: 141000,
  dueFee: 4500,
  dueDate: "2026-10-15",
  status: "Pending Balance",
  breakdown: [
    { title: "Semester Tuition Fee", amount: 85000, status: "Paid", ref: "TXN-881901", date: "2026-08-10" },
    { title: "Hostel Accommodation (Room B-304)", amount: 32000, status: "Paid", ref: "TXN-881902", date: "2026-08-10" },
    { title: "Mess Dining Advance (Sem 6)", amount: 24000, status: "Paid", ref: "TXN-882410", date: "2026-08-12" },
    { title: "Library & Computing Lab Access", amount: 2500, status: "Due", ref: null, date: null },
    { title: "End-Sem Examination & Diploma Fee", amount: 2000, status: "Due", ref: null, date: null }
  ]
};

export const emergencyContacts = [
  {
    role: "Campus Police & Security Control",
    name: "Main Security Gate & Control Room",
    phone: "+91 9988-100-100",
    badge: "24x7 Response",
    icon: "ShieldAlert",
    action: "Instant Call & Siren Ping"
  },
  {
    role: "Campus Medical & Ambulance",
    name: "Dr. B. R. Health Center",
    phone: "+91 9988-100-108",
    badge: "On-Campus ICU Van",
    icon: "Ambulance",
    action: "Dispatch Ambulance"
  },
  {
    role: "Chief Hostel Warden",
    name: "Dr. K. Verma (Boys & Girls Hostels)",
    phone: "+91 9988-100-201",
    badge: "Immediate Escalation",
    icon: "Building",
    action: "Direct Warden Line"
  },
  {
    role: "Women Safety Helpline & Anti-Ragging",
    name: "Internal Complaints Committee (ICC)",
    phone: "1800-180-5522",
    badge: "Confidential & Toll-free",
    icon: "HeartHandshake",
    action: "Confidential SOS"
  },
  {
    role: "Campus Counselor & Mental Wellness",
    name: "MindCare Wellness Center",
    phone: "+91 9988-100-999",
    badge: "Counseling & Care",
    icon: "Brain",
    action: "Confidential Chat"
  }
];

export const initialAdminStats = {
  totalStudents: 3420,
  activeHostelComplaints: 18,
  resolvedComplaintsThisMonth: 142,
  avgResolutionHours: 3.8,
  pendingGatePasses: 7,
  pendingCertificates: 12,
  studentsAtAttendanceRisk: 114,
  noticeReadRate: 88.4,
  complaintCategoriesBreakdown: [
    { category: "Wi-Fi & Internet", count: 8, percentage: 44, color: "bg-blue-500" },
    { category: "Plumbing & Water", count: 4, percentage: 22, color: "bg-cyan-500" },
    { category: "Electricity & Power", count: 3, percentage: 17, color: "bg-amber-500" },
    { category: "Cleanliness", count: 2, percentage: 11, color: "bg-emerald-500" },
    { category: "Furniture", count: 1, percentage: 6, color: "bg-indigo-500" }
  ],
  departmentPending: [
    { department: "Hostel Wardens", pending: 7, resolvedToday: 14, icon: "Home" },
    { department: "Academic Registrar", pending: 12, resolvedToday: 28, icon: "GraduationCap" },
    { department: "Accounts & Fees", pending: 9, resolvedToday: 19, icon: "CreditCard" },
    { department: "Campus Estate & Works", pending: 5, resolvedToday: 11, icon: "Wrench" }
  ]
};
