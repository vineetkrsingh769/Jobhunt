
import {create} from 'zustand';
import { persist } from 'zustand/middleware';

const useJobStore = create(
  persist(
    (set) => ({
      popupVisible: false,
      setPopupVisible: (visible) => set({ popupVisible: visible }),

      jobs: [
        {
          id: 1,
          companyLogo: "https://logo.clearbit.com/twitter.com",
          title: "Senior Business Systems Analyst",
          labels: ["Grant", "New"],
          location: " Work from anywhere",
          time: "Work anytime",
          hours: " 40 hrs/week",
          matchSkills: ["JavaScript", "Java", "HTML"],
          salary: "16 LPA",
        },
        {
          id: 2,
          companyLogo: "https://logo.clearbit.com/google.com",
          title: "Frontend Developer",
          labels: ["New"],
          location: " Remote",
          time: "Flexible hours",
          hours: " 40 hrs/week",
          matchSkills: ["React", "CSS", "HTML"],
          salary: "16 LPA", 
        },
        {
          id: 3,
          companyLogo: "https://logo.clearbit.com/facebook.com",
          title: "Backend Developer",
          labels: ["Popular"],
          location: " Hybrid",
          time: "Flexible hours",
          hours: " 40 hrs/week",
          matchSkills: ["Node.js", "Express"],
          salary: "16 LPA", 
        },
        {
          id: 4,
          companyLogo: "https://logo.clearbit.com/microsoft.com",
          title: "Data Scientist",
          labels: ["Remote"],
          location: " Remote",
          time: "Work anytime",
          hours: " 40 hrs/week",
          matchSkills: ["Python", "Machine Learning"],
          salary: "16 LPA", 
        },
        {
          id: 5,
          companyLogo: "https://logo.clearbit.com/apple.com",
          title: "UX Designer",
          labels: ["New"],
          location: " On-site",
          time: "9 to 5",
          hours: " 40 hrs/week",
          matchSkills: ["Design", "User Research"],
          salary: "16 LPA", 
        },
        {
          id: 6,
          companyLogo: "https://logo.clearbit.com/amazon.com",
          title: "DevOps Engineer",
          labels: ["Urgent"],
          location: " Remote",
          time: "Flexible hours",
          hours: " 40 hrs/week",
          matchSkills: ["AWS", "Docker"],
          salary: "16 LPA", 
        },
      ],
      addJob: (newJob) => set((state) => ({
        jobs: [
          ...state.jobs,
          { ...newJob, id: Date.now() }, // Assign a unique ID based on timestamp
        ],
      })),
    }),
    {
      name: "job-storage", 
    }
  )
);

export default useJobStore;
