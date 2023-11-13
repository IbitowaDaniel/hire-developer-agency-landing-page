

export const SectionHeader1 = ({ heading, headingSecondary }) => (
  <div className="text-center md:text-left">
    <h3 className={`textHeadingSecondary lg:text-4xl lg:leading-[3rem] xl:leading-[3.5rem] xl:text-[42px]`}>{heading}</h3>
    <p className={`textHeadingP opacity-60`}>{headingSecondary}</p>
  </div>
);


export const SectionHeader2 = ({ heading, headingSecondary }) => (
  <div className="text-center xs:max-w-md sm:max-w-lg xl:max-w-xl mx-auto">
    <h3 className={`textHeadingSecondary`}>{heading}</h3>
    <p className={`textHeadingP`}>{headingSecondary}</p>
  </div>
);

export const SectionHeader3 = ({ heading, headingSecondary }) => (
  <div className="text-center">
    <p className={`textHeading`}>{heading}</p>
    <h3 className={`textHeadingSecondary`}>{headingSecondary}</h3>
  </div>
);
