type IProps = {
  description: string;
};
const HTMLDescription = ({ description }: IProps) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: String.raw`${description}` }} />
  );
};

export default HTMLDescription;
