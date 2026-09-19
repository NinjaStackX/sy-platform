export interface Course {
  id: number;
  title: string;
  progress: number;
  lessons: string;
  duration: string;
  image: string;
}

export interface UserProfile {
  name: string;
  role: string;
  email: string;
  phone: string;
  birthDate: string;
  bio: string;
  country: string;
  avatar: string;
  stats: {
    completedCourses: number;
    activeCourses: number;
    completedHours: number;
  };
}

export const initialProfileData: UserProfile = {
  name: "محمد أحمد الشيخ",
  role: "طالب",
  email: "mohammed@example.com",
  phone: "9637260312",
  birthDate: "2002-05-02",
  bio: "طالب شغوف بتعلم تطوير الويب وتصميم واجهات المستخدم UI/UX.",
  country: "SY",
  avatar:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
  stats: {
    completedCourses: 14,
    activeCourses: 3,
    completedHours: 387,
  },
};

export const initialCoursesData: Course[] = [
  {
    id: 1,
    title: "كورس تصميم UI/UX للتطبيقات والمواقع الإلكترونية",
    progress: 78,
    lessons: "18 / 25 درس",
    duration: "25 ساعة",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=200&q=80",
  },
  {
    id: 2,
    title: "تطوير تطبيقات الويب باستخدام Next.js و Tailwind CSS",
    progress: 45,
    lessons: "10 / 22 درس",
    duration: "18 ساعة",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&q=80",
  },
];
