/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  TablesWidget10
} from '../../../_metronic/partials/widgets'

const DatabaseUser: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row g-5 g-xl-10 mb-5 mb-xl-10'>
      <div className='col-xl-12'>
        <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-12' />
      </div>  
      {/* end::Col */}
    </div>
    {/* end::Row */}

  </>
)

const Database: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DatabaseUser />
    </>
  )
}

export {DatabaseUser}
