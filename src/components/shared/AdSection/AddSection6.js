import React from 'react'
import '../../../styles/AdSection/AddSection6.scss'
import ad6pic from '../../../assets/icons/add6.svg'

function AddSection6() {
  return (
    <div className='ad-main6'>
        <div className='ad-main6-header'>
            <div className='ad-main6-left-header'>
                <h2>Latest New</h2>
                <p>Stay ahead of industry trends with our ad tech blog. Read our native advertising tips & tricks.</p>
            </div>

            <div className="btn4">
                <div className="btn-sec4">
                    <button>View all <span>&#8594;</span></button>
                </div>
            </div>
        </div>

        <div className='ad-main6-banner'>
            <div className='ad6-left-banner'>
                <img src={ad6pic}/>
            </div>

            <div className='ad6-right-banner'>
                <div className='leadership'>
                    <p>THOUGHT LEADERSHIP</p>
                    <h2>Key Considerations For Advertisers Amidst Economic Crisis</h2>
                    <p>The current financial situation is impossible for advertisers to ignore; after all, as consumers tighten their belts, brands themselves will feel the pinch. But the way in which brands respond to economic uncertainty requires a delicate balancing act.</p>
                    <div className="btn4-1">
                <div className="btn-sec4">
                    <button>View all <span>&#8594;</span></button>
                </div>
            </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddSection6
