import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'

type Props = {
  pageInfo: PageInfo,
  experiences: Experience[],
  skills: Skill[],
  projects: Project[],
  socials: Social[],
}

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div className='bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-scroll z-0
    overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#2BAAE2]/80'>
      <Head>
        <title>{pageInfo?.name} Portfolio</title>
      </Head>

      <Header socials={socials}/>

      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      </section>

      <section id='about' className='snap-center' >
        <About pageInfo={pageInfo} />
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences} />
      </section>

      <section id='skills' className='snap-start'>
        <Skills skills={skills}/>
      </section>

      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects projects={projects} />
      </section>

      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

    </div>
  )
}

export default Home

{/*export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },

    revalidate: 10,
  };
};*/}

export const getServerSideProps = async () => {
  const [ experiences, projects, pageInfo, skills, socials ] = await Promise.all([
    fetchExperiences(),
    fetchProjects(),
    fetchPageInfo(),
    fetchSkills(),
    fetchSocials()
  ]);

  return {
    props: {
      pageInfo,
      experiences, 
      skills,
      projects,
      socials
    }
  };
};
