import * as React from "react";

interface ItemProps {
  className?: string;
  children: React.ReactNode;
}

class Item extends React.Component<ItemProps> {
  ref = React.createRef<HTMLLIElement>();
  prevPos: number | null = null;
  animation: Animation | null = null;

  componentDidMount() {
    if (!this.ref.current) return;
    this.prevPos = this.ref.current.offsetTop;
  }

  componentDidUpdate(
    prevProps: Readonly<ItemProps>,
    prevState: Readonly<{}>,
    prevY?: any
  ) {
    if (!this.ref.current || !this.prevPos) return;

    const newPosition = this.ref.current.offsetTop;
    const currentPosition = prevY || this.prevPos;

    this.animation?.cancel();
    this.animation = this.ref.current.animate(
      [
        {
          transform: `translateY(${currentPosition - newPosition}px)`,
        },
        {
          transform: `translateY(0)`,
        },
      ],
      {
        duration: 300,
        iterations: 1,
      }
    );

    this.prevPos = newPosition;
  }

  getSnapshotBeforeUpdate(
    prevProps: Readonly<ItemProps>,
    prevState: Readonly<{}>
  ): any {
    return this.ref.current?.getBoundingClientRect().y;
  }

  render() {
    // @ts-ignore
    return (
      <li className={this.props.className} ref={this.ref}>
        {this.props.children}
      </li>
    );
  }
}

export default Item;
