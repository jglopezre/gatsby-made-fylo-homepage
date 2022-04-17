import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceGrin, faFaceGrinTongue, faFaceGrinWide } from '@fortawesome/free-solid-svg-icons';
import { circle, wrapper, iconColor } from './style.module.scss'


const SocialButtonBox  = () => {

  return (
    <div className={ wrapper }>
        <div>
            <div className={ circle }>
                <FontAwesomeIcon className={iconColor} icon={ faFaceGrin } />
            </div>
        </div>
        <div>
            <div className={ circle }>
                <FontAwesomeIcon className={iconColor} icon={ faFaceGrinTongue } />
            </div>
        </div>
        <div>
            <div className={ circle }>
                <FontAwesomeIcon className={iconColor} icon={ faFaceGrinWide } />
            </div>
        </div>
    </div>
  )
}

export default SocialButtonBox;