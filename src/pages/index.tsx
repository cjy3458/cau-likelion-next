import styled from 'styled-components';
import { ReactElement, useRef } from 'react';

import VideoSection from '@home/video/VideoSection';
import PlanSection from '@home/plan/PlanSection';
import IntroduceSection from '@home/introduction/IntroduceSection';
import ProjectSection from '@home/project/ProjectSection';
import TrackSection from '@home/track/TrackSection';
import VisionSection from '@home/vision/VisionSection';
import ScrollBar from '@home/ScrollBar/ScrollBar';

import More from '@image/home_more.svg';
import LayoutLanding from '@common/layout/LayoutLanding';

function Landing() {
  const ref = useRef(null);
  const ClickMore = () => {
    (ref as any).current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <SectionWrapper>
      <ScrollBar />
      <VideoSection />
      <More onClick={ClickMore} />
      <IntroduceSection innerRef={ref} />
      <VisionSection />
      <TrackSection />
      <ProjectSection />
      <PlanSection />
    </SectionWrapper>
  );
}
Landing.getLayout = function getLayout(page: ReactElement) {
  return <LayoutLanding>{page}</LayoutLanding>;
};

export default Landing;
const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  width: 100%;
`;
