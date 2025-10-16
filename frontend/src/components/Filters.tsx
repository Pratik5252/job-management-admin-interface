
'use client'
import { Container, Divider, Flex, Input, MultiSelect, RangeSlider, Text } from '@mantine/core'
import React, { useState } from 'react'
import {Search,MapPin,ChevronDown,User,IndianRupee} from 'lucide-react'

const Filters = () => {
  const [salaryRange, setSalaryRange] = useState<[number, number]>([50000, 800000]);

  return (
    <div className='filters'>
            <div className='filter-text'>
                <Search size={18}/>
                <Input variant="unstyled" placeholder="Search By Job Title, Role" w="100%"/>
            </div>
            <div className='filter-text' >
                <MapPin size={18}/>
                <Input variant="unstyled" placeholder="Preferred Location" w="100%" />
            </div>
            <div className='filter-text'>
                <User size={18}/>
                <MultiSelect
                    w="100%"
                    variant="unstyled"  
                    placeholder="Job type"
                    rightSection={<ChevronDown size={18} />}
                    rightSectionPointerEvents="none"
                    data={[
                        { value: 'FULL_TIME', label: 'Full-time' },
                        { value: 'PART_TIME', label: 'Part-time' },
                        { value: 'CONTRACT', label: 'Contract' },
                        { value: 'INTERNSHIP', label: 'Internship' }
                    ]}
                    clearable
                    maxDropdownHeight={150}
                    hidePickedOptions
                    comboboxProps={{
                        withinPortal: false,
                        transitionProps: { duration: 0 }
                    }}
                />
            </div>
            <div className='filter-range'>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <Text fw={500} mb={8} style={{ color: '#333' }}>
                        Salary Per Month
                    </Text>
                    <Text size="xs" c="dimmed" mb={8}>
                        ₹{(salaryRange[0]/1000).toFixed(0)}k - ₹{(salaryRange[1]/1000).toFixed(0)}k
                    </Text>
                </div>
                    <RangeSlider
                    className='track mark markLabel thumb'
                        value={salaryRange}
                        onChange={setSalaryRange}
                        size="xs"
                        thumbSize={16}
                        min={20000}
                        max={1000000}
                        step={10000}
                        color="#222222"
                        style={{width: "100%"}}
                    />
            </div>
    </div>
  )
}

export default Filters