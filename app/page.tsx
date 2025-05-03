import { FloatingNav } from '@/components/ui/FloatingNavbar';
import RecentProjects from '@/components/RecentProjects';
import { navItems } from '@/data';
import Clients from '@/components/Clients';
import Experience from '@/components/Experience';
import Approach from '@/components/Approach';
import Footer from '@/components/Footer';
import { withLoader } from '@/lib/withLoader';

const Hero = withLoader(() => import('@/components/Hero'));
const Grid = withLoader(() => import('@/components/Grid'));

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center overflow-clip flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
