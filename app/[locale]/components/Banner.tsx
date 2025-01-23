'use client';

import React from 'react';
import DismissButton from './buttons/Dismiss';
import Link from 'next/link';

const BANNER_DISMISSED = 'banner-dismissed';

class TicketBanner extends React.Component<object, { isVisible: boolean }> {
  constructor(props: object) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  componentDidMount() {
    const shouldShow = window.sessionStorage.getItem(BANNER_DISMISSED);

    if (!shouldShow) {
      this.setState({ isVisible: true });
    }

    // well want to revamp this to know if we're currently selling tickets or not
    // auto hiding if we're not selling tickets
    if (shouldShow && JSON.parse(shouldShow)) {
      this.handleClose();
    }
  }

  handleClose = () => {
    this.setState({ isVisible: false });
    window.sessionStorage.setItem(BANNER_DISMISSED, 'true');
  };

  render() {
    if (!this.state.isVisible) {
      return null;
    }

    return (
      <div className='grid grid-cols-2 bg-slate-50 bg-opacity-90 p-1'>
        <div className='flex justify-around'>
          <Link href='/' className='text-lg text-orange-700'>
            9-10th of August 2025 - Join us!
          </Link>
        </div>

        <div className='flex justify-end'>
          <div className='px-2'>
            <DismissButton
              onClick={this.handleClose}
              dataTestId='ticketBannerDismiss'
              className='text-black'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TicketBanner;
