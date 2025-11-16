import { ProjectGallery } from "@/components/Projects/ProjectGallery";
import { ProjectInfo } from "@/components/Projects/ProjectInfo";

export default function project() {
  return (
    <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <ProjectInfo />
      <ProjectGallery />
    </div>
  );
}
