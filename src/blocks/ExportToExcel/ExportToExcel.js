import React from "react";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export default class ExportToExcel extends React.Component {
  render() {
    return (
      <ExcelFile element={this.props.element}>
        <ExcelSheet data={this.props.dataset} name="Logs">
          <ExcelColumn label="№ Вызова" value="number"/>
          <ExcelColumn label="Время приема вызова" value="startTime"/>
          <ExcelColumn label="Время подтверждения адреса" value="acceptAddress"/>
          <ExcelColumn label="Время подтверждения остановки сердца/дыхания" value="stopHeart"/>
          <ExcelColumn label="Причины задержки подтверждения" value="acceptDelay"/>
          <ExcelColumn label="Тип Т-СЛР" value="compressionsType"/>
          <ExcelColumn label="Время начала компрессий" value="compressionTime"/>
          <ExcelColumn label="Причины задержки Т-СЛР" value="TLSRDelay"/>
          <ExcelColumn label="Время окончания работы алгоритма" value="finishedTime"/>
        </ExcelSheet>
      </ExcelFile>
    );
  }
}
