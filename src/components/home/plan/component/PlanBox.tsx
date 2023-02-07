import styled from 'styled-components';

import { Primary } from '@utils/constant/color';

import PlanDateItem from './PlanDateItem';
import PlanTitleItem from './PlanTitleItem';
import PlanDotItem from './PlanDotItem';

const PlanBox = () => {
  const CurriculumData = [
    {
      date: '2월',
      title: '아기사자\n모집',
    },
    {
      date: '3월-7월',
      title: '트랙별\n개별 세션',
    },
    {
      date: '7월-8월',
      title: '아이디어톤\n해커톤',
    },
    {
      date: '방학',
      title: '예정',
    },
  ];

  return (
    <BoxContainer>
      <ItemWrapper>
        <RowWrapper>
          {CurriculumData.map((item, i) => (
            <PlanDateItem key={i} date={item.date} />
          ))}
        </RowWrapper>

        <RowWrapper>
          <PlanDotItem />
        </RowWrapper>

        <RowWrapper>
          {CurriculumData.map((item, i) => (
            <PlanTitleItem key={i} title={item.title} />
          ))}
        </RowWrapper>
      </ItemWrapper>
    </BoxContainer>
  );
};

export default PlanBox;

const BoxContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: ${Primary.light};
  border-radius: 30px;
  flex-direction: column;
  justify-content: center;
  padding: 78px 102px;
  position: relative;

  z-index: 2;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 50px;
  align-items: center;
`;

const RowWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  position: relative;

  align-items: center;
`;
