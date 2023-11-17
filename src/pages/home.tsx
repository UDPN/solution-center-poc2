import { getServerSidePropsResult } from 'libs/utils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Fragment } from 'react';
const HOME: NextPage = () => {
  return (
    <Fragment>
      <></>
    </Fragment>
  );
};

export default HOME;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return getServerSidePropsResult([], {
    ...(await serverSideTranslations(locale || '', [
      'common',
      'router',
      'home',
    ])),
  });
};
