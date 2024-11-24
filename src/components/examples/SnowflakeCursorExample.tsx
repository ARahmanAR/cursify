import React from 'react';

// Import UI components from shadcn/ui
import {
     Card,
     CardContent,
     CardDescription,
     CardHeader,
     CardTitle
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

// Import custom components
import SEO from '../common/SEO';
import { AdvancedCodeBlock } from '@/pages/document/components/AdvanceCodeBlock';
import Preview from '@/pages/document/components/Preview';
import { SnowflakeCursor } from '../cursor/common/SnowflakeCursor';
import CommandCode from '../ui/CommandCode';

const SnowflakeCursorExample = () => {
     // Code to be displayed in the documentation
     const codeToDisplay = `import React, { useState, useEffect, useCallback } from 'react';
import { motion, useAnimation, useSpring } from 'framer-motion';
`;

     return (
          <div className="container mx-auto px-4 py-8 space-y-6">
               {/* SEO Configuration */}
               <SEO
                    title="Snowflake Cursor"
                    description="Interactive cursor tracking component"
                    keywords={['react', 'cursor', 'interaction', 'mouse tracking']}
               />

               {/* Live Demo Card */}
               <Card className='border-none shadow-none'>
                    <CardHeader>
                         <CardTitle className="text-2xl">Snowflake Cursor Component</CardTitle>
                         <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent>
                         <Separator className="my-4" />
                         <Preview
                              title="Live Preview"
                              className="border"
                         >
                              <SnowflakeCursor />
                         </Preview>
                    </CardContent>
               </Card>

               {/* Implementation Card */}
               <Card className='border-none shadow-none'>
                    <CardHeader>
                         <CardTitle>Component Implementation</CardTitle>
                         <CardDescription>
                              Detailed code breakdown of the Follow Cursor component
                              <CommandCode>npm install framer-motion</CommandCode>
                         </CardDescription>
                    </CardHeader>
                    <CardContent>
                         <div className="space-y-4">
                              <div>
                                   <h4 className="text-lg font-semibold mb-2">
                                        Snowflake Cursor Component
                                        <Badge variant="secondary" className="ml-2">TSX</Badge>
                                   </h4>
                                   <AdvancedCodeBlock
                                        code={codeToDisplay}
                                        fileName="./SnowflakeCursorExample.tsx"
                                        lang="typescript"
                                   />
                              </div>
                         </div>
                    </CardContent>
               </Card>
          </div>
     );
};

export default SnowflakeCursorExample;