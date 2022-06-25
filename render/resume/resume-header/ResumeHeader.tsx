import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './index.module.less';
import Button from '@src/components/button/Button';
import getRootPath from '@utils/getRootPath';
import { useAppSelector } from '@utils/reduxHooks';
import { getResumeSavePath } from '@utils/localResumePath';
import Modal from '@src/components/Modal';
// import { htmlToPdf } from '@utils/printPdf';

function printDivToPDF(id: string, path: string) {
  let element = document.getElementById(id);
  let range = new Range();
  range.setStart(element!, 0);
  range.setEndAfter(element!);
  document.getSelection()!.removeAllRanges();
  document.getSelection()!.addRange(range);
  sendExportSelectionToPDF(path);
}

const { sendExportSelectionToPDF } = window.exportSelectionToPDF;
const { onOpenSettingWindow } = window.openSettingWindow;
const { onSetResumeData } = window.setResumeData;

export default function ResumeHeader() {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();

  const { resumeData } = useAppSelector((state) => {
    return {
      resumeData: state.resume.resumeData,
    };
  });

  const onButtonClick = () => {
    navigate('/');
  };

  const onExportPDF = async () => {
    const rootPath = await getRootPath();
    const res = await getResumeSavePath(rootPath);
    if (!res) {
      onOpenSettingWindow();
      return;
    } else {
      onSetResumeData(resumeData);
      // const savePath = `${resumeData?.base?.username}+${resumeData?.base?.school}+${resumeData?.work?.job}`;
      const savePath = res + 'a.pdf';
      // htmlToPdf(savePath);
      // downloadPDF();
      // downloadPDF();
      // htmlToPdf('pdf', savePath);
      // window.print()
      printDivToPDF('pdf', savePath);
    }
  };

  return (
    <div className={styles.headerContainer}>
      <Button size="middle" onClick={onButtonClick}>
        回到首页
      </Button>
      <Button size="middle" onClick={() => setModalShow(true)} className={styles.exportBtn}>
        Export pdf
      </Button>
      {modalShow && (
        <Modal.Confirm
          title="导出pdf"
          showFooter={true}
          config={{
            cancelBtn: {
              isShow: true,
              text: '取消',
              callback: () => {
                setModalShow(false);
              },
            },
            submitBtn: {
              isShow: true,
              text: '确定',
              callback: () => {
                setModalShow(false);
                onExportPDF();
              },
            },
          }}
        >
          确定要导出pdf吗？请确定内容的正确!
        </Modal.Confirm>
      )}
    </div>
  );
}
