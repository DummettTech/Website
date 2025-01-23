import React from 'react';

interface DismissButtonProps {
  onClick: () => void;
  dataTestId?: string;
  className?: string;
}
class DismissButton extends React.Component<DismissButtonProps> {
  static defaultProps = {
    dataTestId: 'dismissButton',
  };

  constructor(props: DismissButtonProps) {
    super(props);
  }

  render() {
    return (
      <button
        className={this.props.className}
        data-testid={this.props.dataTestId}
        aria-label='Dismiss'
        onClick={this.props.onClick}
      >
        ✖
      </button>
    );
  }
}

export default DismissButton;
