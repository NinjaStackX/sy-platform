"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  UserProfile,
  Course,
  initialProfileData,
  initialCoursesData,
} from "@/types/dummyData";

// محاكاة طلبات API (يمكنك استبدالها بـ fetch/axios)
const fetchUserProfile = async (): Promise<UserProfile> => {
  return initialProfileData;
};

const fetchUserCourses = async (): Promise<Course[]> => {
  return initialCoursesData;
};

export function useUserData() {
  const queryClient = useQueryClient();

  // جلب بيانات المستخدم
  const userQuery = useQuery({
    queryKey: ["userProfile"],
    queryFn: fetchUserProfile,
  });

  // جلب الدورات
  const coursesQuery = useQuery({
    queryKey: ["userCourses"],
    queryFn: fetchUserCourses,
  });

  // تحديث بيانات المستخدم
  const updateUserMutation = useMutation({
    mutationFn: async (updatedData: Partial<UserProfile>) => {
      // هنا يتم إرسال API PATCH/PUT
      return updatedData;
    },
    onSuccess: (updatedData) => {
      queryClient.setQueryData<UserProfile>(["userProfile"], (old) => {
        return old ? { ...old, ...updatedData } : (updatedData as UserProfile);
      });
    },
  });

  return {
    user: userQuery.data,
    isLoadingUser: userQuery.isLoading,
    courses: coursesQuery.data || [],
    isLoadingCourses: coursesQuery.isLoading,
    updateUser: updateUserMutation.mutate,
    isUpdatingUser: updateUserMutation.isPending,
  };
}
