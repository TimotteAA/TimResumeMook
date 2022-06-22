import React, { useMemo } from 'react';
import '../../../styles/template-one.normal.less';
import { useAppSelector } from '@utils/reduxHooks';

function Contact() {
  const { contact } = useAppSelector((state) => {
    return {
      contact: state.resume.resumeData.contact,
    };
  });

  const renderedContact = useMemo(() => {
    return contact;
  }, [contact]);

  return (
    <div className="container">
      <p className="title">联系方式 Contact</p>
      <ul className="content">
        {renderedContact.phone && <li style={{ width: '200px' }}>电话：{renderedContact.phone}</li>}
        {renderedContact.email && <li style={{ width: '200px' }}>邮箱：{renderedContact.email}</li>}
        {renderedContact.github && <li style={{ width: '200px' }}>github：{renderedContact.github}</li>}
        {renderedContact.juejin && <li style={{ width: '200px' }}>掘金：{renderedContact.juejin}</li>}
      </ul>
    </div>
  );
}

export default Contact;
