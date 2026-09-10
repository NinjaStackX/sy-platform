import { CourseBuilderProvider } from "@/context/course-builder-context";
import { CourseBuilderWizard } from "@/components/features/course-builder/course-builder-wizard";

export default function CreateCoursePage() {
  return (
    <CourseBuilderProvider>
      <CourseBuilderWizard />
    </CourseBuilderProvider>
  );
}
