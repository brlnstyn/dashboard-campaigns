/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  TablesWidget10,
  ChartsWidget3,
  ChartsWidget1
} from '../../../_metronic/partials/widgets'

const DashboardPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row g-5 g-xl-10 mb-5 mb-xl-10'>
      {/* begin::Col */}
      <div className='col-md-12 col-lg-12 col-xl-7 col-xxl-7 mb-md-7 mb-xl-7'>
        <ChartsWidget3 className='h-md-100' />
      </div>

      <div className='col-md-12 col-lg-12 col-xl-5 col-xxl-5 mb-md-5 mb-xl-5'>
        <ChartsWidget1 className='h-md-100' />
      </div>

      <div className='col-xl-12'>
        <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-12' />
      </div>  
      {/* end::Col */}
    </div>
    {/* end::Row */}

  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
