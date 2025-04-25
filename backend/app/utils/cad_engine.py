from app.config import settings
import os
from typing import Dict, Any
import tempfile

class CADEngine:
    def __init__(self):
        self.engine_type = settings.CAD_ENGINE
        
    def generate_model(self, parameters: Dict[str, Any]) -> str:
        """Generate a CAD model from parameters and return file path"""
        # Create temporary file
        temp_dir = tempfile.mkdtemp()
        file_path = os.path.join(temp_dir, "model.step")
        
        # Based on selected engine
        if self.engine_type == "opencascade":
            self._generate_with_opencascade(parameters, file_path)
        else:
            self._generate_with_blender(parameters, file_path)
            
        return file_path
    
    def _generate_with_opencascade(self, parameters: Dict[str, Any], output_path: str):
        """Generate model using PythonOCC"""
        from OCC.Core.BRepPrimAPI import BRepPrimAPI_MakeBox
        from OCC.Core.gp import gp_Pnt
        from OCC.Core.TopoDS import TopoDS_Shape
        from OCC.Core.STEPControl import STEPControl_Writer
        from OCC.Core.Interface import Interface_Static_SetCVal
        
        # Create a simple box based on parameters
        length = parameters.get("dimensions", {}).get("length", 100)
        width = parameters.get("dimensions", {}).get("width", 50)
        height = parameters.get("dimensions", {}).get("thickness", 10)
        
        box = BRepPrimAPI_MakeBox(length, width, height).Shape()
        
        # Export to STEP
        step_writer = STEPControl_Writer()
        Interface_Static_SetCVal("write.step.schema", "AP203")
        step_writer.Transfer(box, STEPControl_AsIs)
        step_writer.Write(output_path)
    
    def _generate_with_blender(self, parameters: Dict[str, Any], output_path: str):
        """Generate model using Blender Python API"""
        import bpy
        
        # Clear existing objects
        bpy.ops.wm.read_factory_settings(use_empty=True)
        
        # Create mesh based on parameters
        length = parameters.get("dimensions", {}).get("length", 100) / 1000  # Convert to meters
        width = parameters.get("dimensions", {}).get("width", 50) / 1000
        height = parameters.get("dimensions", {}).get("thickness", 10) / 1000
        
        bpy.ops.mesh.primitive_cube_add(size=1)
        cube = bpy.context.object
        cube.scale = (length, width, height)
        
        # Export
        if output_path.endswith('.step') or output_path.endswith('.stp'):
            bpy.ops.export_mesh.stp(filepath=output_path)
        else:
            bpy.ops.export_mesh.stl(filepath=output_path)
    
    def export_model(self, input_path: str, format: str) -> str:
        """Convert model to different format"""
        # Implementation would convert between formats
        # For simplicity, we'll just return the input path in this example
        return input_path