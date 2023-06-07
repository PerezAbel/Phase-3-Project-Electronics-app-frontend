import React from 'react';

function ImageDisplay() {
  return (
    <div style={{ display: 'flex', gap: '20px'  }}>
      <img src="https://m.economictimes.com/thumb/msid-93747525,width-1200,height-900,resizemode-4,imgsize-45376/iphone-14-max-iphone-14-pro-max-see-which-apple-phones-demand-scaling-new-heights.jpg" style={{ width: '400px', height: '400px' }} />
      <img src="https://kitchenaid-h.assetsadobe.com/is/image/content/dam/business-unit/whirlpoolv2/en-us/marketing-content/site-assets/page-content/oc-articles/how-much-water-does-a-washing-machine-use/he-washing-machine-water-usage_Thumbnail.jpg?wid=1200&fmt=webp" style={{ width: '400px', height: '400px'  }} />
      <img src="https://kenyaprice.com/wp-content/uploads/2019/01/Speaker-Prices-in-Kenya.jpg" style={{ width: '400px', height: '400px' }} />
      <img src="https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-80010563/80010563.jpg" style={{ width: '400px', height: '400px' }} />
    </div>
  );
}

export default ImageDisplay;