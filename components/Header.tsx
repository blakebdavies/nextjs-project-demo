import React from 'react'
import navigation from '@/constants'

const Header = () => {
  return (
    <div>
      {navigation.map((item: string) => (
        <a key={item.id} href={item.url}></a>
      )}
    </div>
  )
}

export default Header
