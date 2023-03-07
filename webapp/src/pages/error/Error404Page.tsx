import React from 'react'
import NoAuthenticatedLayout from 'src/layouts/NoAuthenticatedLayout'

 function Error404Page() {
  return (
    <NoAuthenticatedLayout>
      <p>Página no encontrada</p>
    </NoAuthenticatedLayout>
  )
}

export default Error404Page;
